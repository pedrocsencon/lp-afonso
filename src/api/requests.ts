import { AddUserInListProps, User } from "@/types";
import { useMutation } from "react-query";
import { api } from "./api";

export const useRegisterUser = () => {
   return useMutation((payload: User) =>
     api
       .post(`/contact/sync`, {
         contact: {
            firstName: payload.firstName,
                     lastName: payload.lastName,
                     email: payload.email,
                     phone: payload.phone
         }
       }, {
       })
       .then(r => {return r}),
   );
 };
 

 export const useAddUserInList = () => {
   return useMutation((payload: AddUserInListProps) =>
     api
       .post(`/contactLists`, {
         contactList: {
            list: payload.list,
         contact: payload.contact,
         status: payload.status  
         }
       }, {
       })
       .then(r => {return r}),
   );
 };
