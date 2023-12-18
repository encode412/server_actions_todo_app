import Form from "../ui/Form";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { create } from "@/app/actions/todoActions";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button actionButton type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
