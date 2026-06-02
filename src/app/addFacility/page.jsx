"use client";

import { motion } from "framer-motion";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
} from "@heroui/react";

import toast from "react-hot-toast";
import { redirect } from "next/navigation";

const AddFacilityPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());
    const res = await fetch(`http://localhost:5000/facility`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(facility),
    });
    const data = await res.json();
    // console.log(data);
    toast.success(`Facility added`);
    redirect("/allFacilities");
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Add New Facility</h1>

          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Register your sports facility on SportNest and allow players to
            discover, book, and enjoy your venue with ease.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl bg-white dark:bg-slate-900 shadow-xl p-6 md:p-10"
        >
          <Form className="space-y-8" onSubmit={onSubmit}>
            {/* Row 1 */}
            <div className="grid gap-6 md:grid-cols-2">
              <TextField isRequired name="name" type="text">
                <Label>Facility Name</Label>
                <Input placeholder="Enter Your Facility Name" />
              </TextField>

              <Select
                name="type"
                type="text"
                placeholder="Select Sport Type"
                isRequired
              >
                <Label>Sport Type</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox className="p-3">
                    <ListBox.Item id="footBall" textValue="Florida">
                      FootBall
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="cricket" textValue="Delaware">
                      Cricket
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="badminton" textValue="California">
                      Badminton
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="tennis" textValue="Texas">
                      Tennis
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="swimming" textValue="New York">
                      Swimming
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="basketball" textValue="Washington">
                      Basketball
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="vollyball" textValue="Washington">
                      Vollyball
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Row 2 */}
            <div className="grid gap-6 md:grid-cols-2">
              <TextField isRequired name="image" type="url">
                <Label>Image URL</Label>
                <Input placeholder="https://i.ibb.co/example.jpg" />
              </TextField>

              <TextField isRequired name="location" type="text">
                <Label>Location</Label>
                <Input placeholder="e.g. Gulshan, Dhaka" />
              </TextField>
            </div>

            {/* Row 3 */}
            <div className="grid gap-6 md:grid-cols-2">
              <TextField isRequired name="price" type="number">
                <Label>Price Per Hour ($) </Label>
                <Input placeholder="50" />
              </TextField>

              <TextField isRequired name="players" type="number">
                <Label>Capacity (Players) </Label>
                <Input placeholder="22" />
              </TextField>
            </div>

            {/* Time Slots */}
            <div>
              <Select
                name="time"
                type="text"
                placeholder="e.g. 08:00 AM - 09:00 AM"
                isRequired
              >
                <Label>Available Time Slots</Label>
                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox className="p-3">
                    <ListBox.Item id="08:00 AM - 09:00 AM" textValue="Florida">
                      08:00 AM - 09:00 AM
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="09:00 AM - 10:00 AM" textValue="Florida">
                      09:00 AM - 10:00 AM
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="10:00 AM - 11:00 AM" textValue="Florida">
                      10:00 AM - 11:00 AM
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                    <ListBox.Item id="11:00 AM - 12:00 AM" textValue="Florida">
                      11:00 AM - 12:00 AM
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Description */}

            <TextField
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

            <Button
              type="submit"
              color="primary"
              size="lg"
              className="w-full md:w-auto"
            >
              Add Facility
            </Button>
          </Form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddFacilityPage;
