"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/react";
import { supabase } from "@/lib/supabase";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClose = () => {
    setIsSubmitted(false);
    setEmail("");
    onClose();
  };

  // Auto-close the modal after 3 seconds when submitted
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from("beta_signups")
        .insert([{ email: email.toLowerCase() }]);

      if (error) {
        console.error("Error inserting email:", error);
        // Still show success to user even if there's an error
      }

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      // Still show success to user even if there's an error
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="md">
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          {!isSubmitted ? (
            <h2 className="font-geist text-2xl font-medium">
              Get Early Access
            </h2>
          ) : (
            <h2 className="font-geist text-2xl font-medium text-gray-600">
              Thank You!
            </h2>
          )}
        </ModalHeader>
        <ModalBody>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="font-satoshi text-gray-600">
                Be among the first to experience Zenglish. Enter your email to
                secure your beta access.
              </p>
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-satoshi"
                disabled={isLoading}
              />
            </form>
          ) : (
            <div className="text-center py-4">
              <p className="font-satoshi text-lg text-gray-800">
                Zenglish beta access secured. We&apos;ll contact you very soon.
              </p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {!isSubmitted ? (
            <Button
              color="primary"
              variant="solid"
              radius="full"
              className="font-semibold font-rethink bg-black text-white"
              onClick={handleSubmit}
              isLoading={isLoading}
              disabled={!email || isLoading}
            >
              Register for Beta
            </Button>
          ) : (
            <Button
              color="primary"
              variant="solid"
              radius="full"
              className="font-semibold font-rethink bg-black text-white"
              onClick={handleClose}
            >
              Close
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
