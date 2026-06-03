"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

import toast from "react-hot-toast";
import { MdOutlineCancel } from "react-icons/md";

export function DeleteBooking({ booking }) {
  const { _id, facility_name } = booking;

  const handleBookingDelete = async () => {
    const { data: tokenData } = await authClient.token();
    const res = await fetch(`${process.env.SERVER_URL}/booking/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success(
        `${facility_name} is deleted from your bookings permanently`,
      );
      window.location.reload();
    }
  };

  return (
    <AlertDialog>
      <Button
        variant="danger"
        className="flex items-center gap-2 w-full md:w-30 lg:w-50"
      >
        <MdOutlineCancel />
        Delete{" "}
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete &quot;{booking.facility_name}&quot; Permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>&quot;{booking.facility_name}&quot;</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleBookingDelete}
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
