"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function UnderConstructionDiag() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    // Automatically open the dialog when the component mounts
    setIsDialogOpen(true);
  }, []);

  const handleCancel = () => {
    window.location.href = "https://www.google.com"; // Redirect to Google
  };

  const handleContinue = () => {
    setIsDialogOpen(false); // Close the dialog
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>This app is under construction.</AlertDialogTitle>
          <AlertDialogDescription>
            You are about to enter a pre-release version of this app, and it is not stable. The majority of features are not yet implemented. Are you sure you want to continue? <br /> The app is provided as is, without any guarantees or warranties as per the MIT License.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleContinue}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
