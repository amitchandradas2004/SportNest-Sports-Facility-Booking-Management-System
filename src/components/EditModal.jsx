"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextField,
  Select,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
export function EditModal({ facility }) {
  const {
    _id,
    name,
    image,
    facility_type,
    location,
    price_per_hour,
    capacity,
    description,
  } = facility;

  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.SERVER_URL}/facility/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(facility),
    });
    const data = await res.json();

    if (!res.ok) {
      toast.error("Update failed");
      return;
    }
    toast.success("Facility updated successfully");
    router.refresh();
  };
  return (
    <Modal>
      <Button className={"bg-indigo-600 w-full"}>
        {" "}
        <FaEdit />
        Edit
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FiEdit />
              </Modal.Icon>
              <Modal.Heading>Edit Facility</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="space-y-5">
                  <TextField
                    isRequired
                    name="name"
                    type="text"
                    defaultValue={name}
                    isDisabled
                  >
                    <Label>Facility Name</Label>
                    <Input placeholder="Enter Your Facility Name" />
                  </TextField>

                  <Select
                    defaultValue={facility_type}
                    name="type"
                    type="text"
                    placeholder={facility_type}
                    isRequired
                  >
                    <Label>Sport Type</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox className="p-3">
                        <ListBox.Item id="FootBall" textValue="FootBall">
                          FootBall
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Cricket" textValue="Cricket">
                          Cricket
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Badminton" textValue="Badminton">
                          Badminton
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Tennis" textValue="Tennis">
                          Tennis
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Swimming" textValue="Swimming">
                          Swimming
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Basketball" textValue="Basketball">
                          Basketball
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Vollyball" textValue="Vollyball">
                          Vollyball
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item id="Futsal" textValue="Futsal">
                          Futsal
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField
                    isRequired
                    name="image"
                    type="url"
                    defaultValue={image}
                    isDisabled
                  >
                    <Label>Image URL</Label>
                    <Input placeholder="https://i.ibb.co/example.jpg" />
                  </TextField>

                  <TextField
                    isRequired
                    name="location"
                    type="text"
                    defaultValue={location}
                  >
                    <Label>Location</Label>
                    <Input placeholder="e.g. Gulshan, Dhaka" />
                  </TextField>

                  <TextField
                    isRequired
                    name="price"
                    type="number"
                    defaultValue={price_per_hour}
                  >
                    <Label>Price Per Hour ($) </Label>
                    <Input placeholder="50" />
                  </TextField>

                  <TextField
                    isRequired
                    name="players"
                    type="number"
                    defaultValue={capacity}
                  >
                    <Label>Capacity (Players) </Label>
                    <Input placeholder="22" />
                  </TextField>

                  <Select
                    name="time"
                    type="text"
                    // placeholder={available_slots}
                    isRequired
                  >
                    <Label>Available Time Slots</Label>
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox className="p-3">
                        <ListBox.Item
                          id="08:00 AM - 09:00 AM"
                          textValue="08:00 AM - 09:00 AM"
                        >
                          08:00 AM - 09:00 AM
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="09:00 AM - 10:00 AM"
                          textValue="09:00 AM - 10:00 AM"
                        >
                          09:00 AM - 10:00 AM
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="10:00 AM - 11:00 AM"
                          textValue="10:00 AM - 11:00 AM"
                        >
                          10:00 AM - 11:00 AM
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                        <ListBox.Item
                          id="11:00 AM - 12:00 AM"
                          textValue="11:00 AM - 12:00 AM"
                        >
                          11:00 AM - 12:00 AM
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField
                    defaultValue={description}
                    isRequired
                    name="description"
                    type="text"
                    minRows={5}
                    variant="bordered"
                  >
                    <Label>Description</Label>
                    <Input placeholder="Describe your facility..." />
                  </TextField>

                  {/* Submit */}
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      color="primary"
                      size="lg"
                      className="w-full md:w-auto"
                    >
                      Add Facility
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
