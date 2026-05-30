"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { toast } from "react-toastify";


export function CancelBookingAlert({ booking }) {
  
  
  const handleCancelBooking = async () => {
    const { data: tokenData } = await authClient.token();
    

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${booking._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`
      },     
    })
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.warning("Booking Cancelled For This Car")
    }
    window.location.reload()
}

  return (
    <AlertDialog>
      <AlertDialog.Trigger>
     <button className="text-xs font-medium text-red-500 hover:text-white  px-4 py-2 rounded-full transition-all duration-200 ">
    Cancel Booking
  </button>
      </AlertDialog.Trigger>
 
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel Booking permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently Cancel this booking for <strong>{ booking.carName}</strong>. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Close
              </Button>
              <Button onClick={handleCancelBooking} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}