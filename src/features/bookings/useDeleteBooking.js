import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBookingRow, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: () => {
      toast.success(`Booking succesfully deleted`);
      queryClient.invalidateQueries({ active: true });
    },
    onError: () => {
      toast.error("There was an error while deleting the booking");
    },
  });

  return { deleteBookingRow, isDeleting };
}
