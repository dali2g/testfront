import { motion } from "framer-motion";

const people = [
  {
    name: "Steven McHail",
    role: "Designer at Globex Corporation",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Jaquelin Isch",
    role: "UX Design at InGen",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Dianne Guilianelli",
    role: "General Manager at Initech",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
  {
    name: "Ronni Cantadore",
    role: "Design Engineer at Weyland-Yutani",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Erhart Cockrin",
    role: "Product Lead at Cyberdyne Systems",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Parker Johnson",
    role: "UI Designer at MomCorp",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    lastSeen: null,
  },
];

export default function List() {
  return (
    <div>
      <h1 className="px-14 py-6 text-6xl text-[#053b50] font-bold">
        Speakers 
      </h1>
      <h3 className="px-14 text-lg font-semibold leading-8 text-gray-600">
      Learn from the experts on the cutting-edge of deception at the
        most sinister companies.
      </h3>
      <ul role="list" className="p-20 mx-12 grid gap-4 grid-cols-3 grid-rows-3">
        {people.map((person) => (
          <li key={person.email}>
            <motion.div
              className="w-full  justify-center items-center px-12 py-12  rounded-x hover:border-2 hover:rounded-3xl "
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, type: "just" }}
            >
              <img
                className="h-auto w-auto rounded-full border-2  outline outline-offset-2 outline-1  bg-gray-50"
              
                src={person.imageUrl}
              />
              <p className="mt-5 text-sm font-semibold text-[#053b50]">
                {person.name}
              </p>

              <p className="text-sm text-[#053b50]">{person.role}</p>
              {person.lastSeen ? (
                <p className="mt-1 text-xs text-gray-500">
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 gap-x-1.5">
                  <p className="text-xs text-gray-500">Online</p>
                </div>
              )}
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}
