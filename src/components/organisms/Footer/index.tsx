import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./Footer.module.css";
import { Icon } from "components/atoms/Icon";

const users = [
  {
    id: "henrique0498",
    photo: "https://avatars.githubusercontent.com/u/39716479?v=4",
    name: "Henrique Lopes",
    rm: "550279",
    github: "https://github.com/Henrique0498",
    linkedIn: "https://www.linkedin.com/in/henrique-ls/",
  },
  {
    id: "nataliascigliano",
    photo: "https://avatars.githubusercontent.com/u/125839232?v=4",
    name: "Natalia Scigliano",
    rm: "98430",
    github: "https://github.com/nataliascigliano",
    linkedIn: "https://www.linkedin.com/in/natalia-scigliano/",
  },
  {
    id: "caiorr1",
    photo: "https://avatars.githubusercontent.com/u/126923467?v=4",
    name: "Caio Ribeiro Rodrigues",
    rm: "99759",
    github: "https://github.com/caiorr1",
    linkedIn: "https://www.linkedin.com/in/caio-ribeiro-rodrigues-720420184/",
  },
  {
    id: "EduardoJablinski",
    photo: "https://avatars.githubusercontent.com/u/127799391?v=4",
    name: "Eduardo Jablinski",
    rm: "550975",
    github: "https://github.com/EduardoJablinski",
    linkedIn: "https://www.linkedin.com/in/eduardo-j-131572207/",
  },

  {
    id: "FelipeSieiro",
    photo: "https://avatars.githubusercontent.com/u/125573345?v=4",
    name: "Felipe Sieiro",
    rm: "98249",
    github: "https://github.com/FelipeSieiro",
    linkedIn: "https://www.linkedin.com/in/felipesieiro/",
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
                        className="hover:text-emerald-500"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href={user.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                        className="hover:text-emerald-500"
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
