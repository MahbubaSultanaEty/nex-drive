"use client";

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { toast } from "react-toastify";


export function DeleteMyAddedCar({ car }) {
   
  const handleDeleteCar =async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cars/${car._id}`, {
          method: "DELETE",
          headers: {
              "content-type": "application/json"
          }
      })  
      const data = await res.json();
       if (data.deletedCount > 0) {
    toast.warning("Car deleted from our site");

    window.location.reload();
  }
    }

    return (
    <AlertDialog>
      <AlertDialog.Trigger>
     <button className="text-xs border-2 font-medium text-red-500 hover:text-white hover:bg-red-500 px-4 py-2 rounded-full transition-all duration-200 ">
    Delete Car
  </button>
      </AlertDialog.Trigger>
 
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Car?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will remove your <strong>{ car.carName}</strong> for renting from our website. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDeleteCar} slot="close" variant="danger">
                Delete Car
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

  
