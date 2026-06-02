"use client";

import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

export function DeleteFacility({ facility }) {
  const { _id, name } = facility;
  const handleFacilityDelete = async () => {
    const res = await fetch(`http://localhost:5000/facility/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    toast.success(`${name} is successfully deleted.`);
    redirect("/allFacilities");
  };
  return (
    <AlertDialog>
      <Button variant="danger" className={"w-full"}>
        <MdDeleteForever />
        Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />

              <AlertDialog.Heading>
                Delete facility permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all of
                its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button
                onClick={handleFacilityDelete}
                slot="close"
                variant="danger"
              >
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
