import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Fade } from "react-reveal";
import Dollar from "@/public/icons/dollar.svg";
import Horse from "@/public/icons/horse.svg";
import Users from "@/public/icons/users.svg";
import User from "@/public/icons/user.svg";
import Canlendar from "@/public/icons/calendar.svg";
import Notification from "@/public/icons/notification.svg";
import ArrowTop from "@/public/icons/arrowTop.svg";

const allItems = [
  {
    id: 1,
    itemIcon: Dollar,
    itemTitle: "Caixa",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 2,
    itemIcon: Horse,
    itemTitle: "Cavalos",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 3,
    itemIcon: Users,
    itemTitle: "Atletas e professores",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 4,
    itemIcon: User,
    itemTitle: "Equipe e usuários",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 5,
    itemIcon: Canlendar,
    itemTitle: "Aulas",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 6,
    itemIcon: Notification,
    itemTitle: "Notificações",
    itemDes:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const Index = () => {
  const [expandItem, setExpandItem] = useState(null);

  const itemToggleHandler = (item) => {
    if (expandItem?.id !== item.id) {
      setExpandItem(item);
    } else {
      setExpandItem(null);
    }
  };

  return (
    <div className="mt-24">
      <div className="w-10/12 mx-auto flex justify-between flex-wrap gap-8 md:gap-20 container">
        {allItems.map((item) => (
          <Fade bottom key={item.id}>
            <div
              className={`w-full md:w-[40%] lg:w-[46%] bg-white shadow-2xl p-4 sm:p-8 rounded-3xl ${
                expandItem?.id === item.id ? "h-auto" : "h-36"
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => itemToggleHandler(item)}
              >
                <div className="w-16">
                  <Image src={item.itemIcon} alt="" className="w-full" />
                </div>
                <div className="flex justify-between items-center w-9/12">
                  <p className="text-xl lg:text-xxl font-bold text-green-500">
                    {item.itemTitle}
                  </p>
                  <motion.div
                    animate={{ rotate: expandItem?.id === item.id ? 0 : 180 }}
                    className="w-10"
                  >
                    <Image src={ArrowTop} alt="" className="w-full" />
                  </motion.div>
                </div>
              </div>
              <AnimatePresence>
                {expandItem?.id === item.id && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 10 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.1 }}
                    className="font-bold w-9/12 ml-auto"
                  >
                    {item.itemDes}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Index;
