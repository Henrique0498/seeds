import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./Footer.module.css";
import { Icon } from "components/atoms/Icon";

const users = [
  {
    id: "henrique0498",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Henrique Lopes",
    rm: "550279",
    github: "",
    linkedIn: "",
  },
  {
    id: "432432432",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Henrique Lopes",
    rm: "550279",
    github: "",
    linkedIn: "",
  },
  {
    id: "3452432423",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Henrique Lopes",
    rm: "550279",
    github: "",
    linkedIn: "",
  },
  {
    id: "432432434",
    photo:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    name: "Henrique Lopes",
    rm: "550279",
    github: "",
    linkedIn: "",
  },
];

export function Footer() {
  return (
    <footer className="bg-emerald-500 pt-6">
      <div className={styles.division} />
      <div className="bg-emerald-950 p-4">
        <div className="mx-auto max-w-7xl w-full text-emerald-50 grid lg:grid-cols-2 gap-4">
          <div className="flex flex-col items-center h-full justify-center">
            <Icon icon="logo" className="w-36 h-36 text-emerald-500" />
            <h2 className={`${styles.title} text-emerald-500`}>Seeds</h2>
            <span>
              © {new Date().getFullYear()} Todos os direitos reservados a Seeds.
            </span>
          </div>

          <div className="flow-root">
            <ul role="list" className="divide-y divide-emerald-800">
              {users.map((user) => (
                <li className="py-3 sm:py-4" key={user.id}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full object-cover"
                        src={user.photo}
                        alt={`foto de ${user.name}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {user.name}
                      </p>
                      <p className="text-sm truncate">RM: {user.rm}</p>
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={user.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Github"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={user.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <FaLinkedinIn size={20} />
                      </a>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
