"use client";

import { useState } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Select,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { BiDollar, BiEdit, BiImage } from "react-icons/bi";
import { Car, MapPin } from "@gravity-ui/icons";
import { BsSave } from "react-icons/bs";
import { PiUserSquareFill } from "react-icons/pi";
import { authClient } from "@/lib/auth-client";



const carTypes = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Luxury",
  "Electric",
  "Convertible",
  "Pickup Truck",
];

const availabilityOptions = ["Available", "Unavailable"];

export default function EditCarModal({ car }) {
  const [open, setOpen] = useState(false);

  const {
    _id,
    carName,
    dailyRentPrice,
    carType,
    seats,
    availability,
    imageUrl,
    location,
    description,
  } = car;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const updatedCar = Object.fromEntries(formData.entries());

    console.log(updatedCar);

     const { data: tokenData } = await authClient.token();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/cars/${_id}`,
      {
        method: "PATCH",
        headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },
        body: JSON.stringify(updatedCar),
      }
    );

    const data = await res.json();

    console.log(data);
    window.location.reload()
    setOpen(false);
  };

  return (
    <Modal open={open} onOpenChange={setOpen} key={open.toString()}>
      {/* Trigger */}
      <Button
        onPress={() => setOpen(true)}
        variant="outline"
        className="border border-[#E0D9D0] bg-[#F8F5F0] hover:border-[#2b78c0] hover:text-[#2b2dc0]"
      >
        <BiEdit size={16} />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-2xl rounded-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header>
              <Modal.Icon className="bg-[#FDEDEC] text-[#2d2bc0]">
                              <Car size={24} />
              </Modal.Icon>

              <Modal.Heading>Edit Car Info</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update your car listing information.
              </p>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface variant="default" className="rounded-3xl">
                <form
                  onSubmit={handleSubmit}
                  className="p-4 md:p-8 space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                   

                    {/* Price */}
                    <TextField
                      name="dailyRentPrice"
                      type="number"
                      defaultValue={dailyRentPrice}
                      isRequired
                    >
                      <Label>Daily Rent Price</Label>

                      <Input
                        type="number"
                        placeholder="120"
                        className="rounded-2xl"
                        
                      />

                      <FieldError />
                    </TextField>

                    {/* Seats */}
                    <TextField
                      name="seats"
                      type="number"
                      defaultValue={seats}
                      isRequired
                    >
                      <Label>Seats</Label>

                      <Input
                        type="number"
                        placeholder="4"
                        className="rounded-2xl"
                        
                      />

                      <FieldError />
                    </TextField>

                    {/* Car Type */}
                    <div>
                      <Select
                        name="carType"
                        defaultSelectedKeys={[carType]}
                        className="w-full"
                        placeholder="Select car type"
                      >
                        <Label>Car Type</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {carTypes.map((type) => (
                              <ListBox.Item
                                key={type}
                                id={type}
                                textValue={type}
                              >
                                {type}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Availability */}
                    <div>
                      <Select
                        name="availability"
                        defaultSelectedKeys={[availability]}
                        className="w-full"
                        placeholder="Availability"
                      >
                        <Label>Availability</Label>

                        <Select.Trigger className="rounded-2xl">
                          <Select.Value />
                          <Select.Indicator />
                        </Select.Trigger>

                        <Select.Popover>
                          <ListBox>
                            {availabilityOptions.map((status) => (
                              <ListBox.Item
                                key={status}
                                id={status}
                                textValue={status}
                              >
                                {status}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            ))}
                          </ListBox>
                        </Select.Popover>
                      </Select>
                    </div>

                    {/* Location */}
                    <div className="md:col-span-2">
                      <TextField
                        name="location"
                        defaultValue={location}
                        isRequired
                      >
                        <Label>Location</Label>

                        <Input
                          placeholder="Dhaka, Gulshan"
                          className="rounded-2xl"
                         
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Image URL */}
                    <div className="md:col-span-2">
                      <TextField
                        name="imageUrl"
                        defaultValue={imageUrl}
                        isRequired
                      >
                        <Label>Image URL</Label>

                        <Input
                          type="url"
                          placeholder="https://example.com/car.jpg"
                          className="rounded-2xl"
                         
                        />

                        <FieldError />
                      </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-2">
                      <TextField
                        name="description"
                        defaultValue={description}
                        isRequired
                      >
                        <Label>Description</Label>

                        <TextArea
                          placeholder="Describe the car..."
                          className="rounded-3xl"
                        />

                        <FieldError />
                      </TextField>
                    </div>
                  </div>

                  {/* Footer */}
                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      className="bg-[#C0392B] text-white hover:bg-[#922B21]"
                    >
                      <BsSave size={16} />
                      Save Changes
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