type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

//// Readonly as utility
const todo: Readonly<Todo> = {
  title: "Assistir Dark de novo",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);

// todo.completed = true;

console.log(todo);

//// Partial as utility
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo2: Todo = updateTodo(todo, { completed: true });

console.log(todo2);

//// Pick as utility
type TodoPreview = Pick<Todo, "title" | "completed">;

const todo3: TodoPreview = {
  title: "Fechar Ghost of Tsushima",
  completed: false,
};

//// Omit
type TodoPreview2 = Omit<Todo, "description">;

const todo4: TodoPreview2 = {
  completed: false,
  title: "Something",
};
