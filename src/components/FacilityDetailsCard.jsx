"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  Input,
  Button,
  Select,
  Label,
  ListBox,
  TextField,
  DateField,
  Form,
} from "@heroui/react";
import Image from "next/image";

export default function FacilityDetails({ facility }) {
  const [hours, setHours] = useState(1);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden">
            <Image
              src={facility.image}
              alt={facility.name}
              width={1000}
              height={600}
              className="w-full h-[400px] object-cover rounded-xl"
            />
          </Card>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="mt-6 text-3xl md:text-4xl font-bold text-center md:text-start">
              {facility.name}
            </h1>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="p-4">
                <p className="text-sm text-default-500">Location</p>
                <p className="font-semibold">{facility.location}</p>
              </Card>

              <Card className="p-4">
                <p className="text-sm text-default-500">Capacity</p>
                <p className="font-semibold">{facility.capacity} Players</p>
              </Card>

              <Card className="p-4">
                <p className="text-sm text-default-500">Price</p>
                <p className="font-semibold">${facility.price_per_hour}/hour</p>
              </Card>

              <Card className="p-4">
                <p className="text-sm text-default-500">Bookings</p>
                <p className="font-semibold">{facility.booking_count}</p>
              </Card>
            </div>

            <Card className="p-5 mt-5">
              <h3 className="mb-2 text-lg font-semibold">
                About this Facility
              </h3>
              <p className="text-default-600">{facility.description}</p>
            </Card>
          </motion.div>
        </motion.div>

        {/* BOOKING FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 sticky top-6 space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Book This Facility</h2>
              <p className="text-default-500">
                Fill in your details to reserve this spot
              </p>
            </div>

            <Form className="space-y-5 flex  flex-col">
              {/* Facility Name */}
              <TextField isRequired name="name" type="text">
                <Label>Facility Name</Label>
                <Input
                  placeholder="Enter Your Facility Name"
                  value={facility?.name || ""}
                  className={"disabled:"}
                />
              </TextField>

              {/* Booking Date */}
              <DateField name="date" type="date" isRequired>
                <Label>Booking Date</Label>
                <DateField.Group>
                  <DateField.Input>
                    {(segment) => <DateField.Segment segment={segment} />}
                  </DateField.Input>
                </DateField.Group>
              </DateField>

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

              {/* Hours */}

              <TextField isRequired name="duration" type="number">
                <Label>Duration (Hours)</Label>
                <Input
                  placeholder="Enter Your Facility Name"
                  min={1}
                  value={String(hours)}
                  onChange={(e) => setHours(Number(e.target.value) || 1)}
                />
              </TextField>

              {/* Total Price */}
              <div className="rounded-xl bg-success-50 p-5 border border-slate-500 bg-indigo-50 dark:bg-[#18181B]">
                <div className="flex justify-between">
                  <span>Price Per Hour</span>
                  <span>${facility?.price_per_hour}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <span>Duration</span>
                  <span>{hours} hr</span>
                </div>

                <div className="border-t mt-3 pt-3 flex justify-between">
                  <span className="font-semibold">Total Price</span>
                  <span className="text-xl font-bold text-success">
                    ${(facility?.price_per_hour || 0) * hours}
                  </span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-indigo-600 hover:bg-indigo-700"
              >
                Confirm Booking
              </Button>
            </Form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
