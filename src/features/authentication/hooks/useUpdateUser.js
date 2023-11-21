import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser } from "../../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: ({ user }) => {
      toast.success("Current user successfully updated");
      queryClient.setQueryData(["user"], user);
      //   queryClient.invalidateQueries(["user"]);
    },
    onError: (error) => toast.error(error.message),
  });
  return { isUpdating, updateUser };
}
