import "./Alert.scss";

import { motion } from "framer-motion";

import { useSelector, useDispatch } from "react-redux";

const Alert = () => {
  const { alert } = useSelector((state) => state);
  return (
    <motion.div
      className="alerts"
      initial={{ y: -30, opacity: 0 }}
      animate={alert[0] ? {y: 0, opacity: 1} : {y: -30, opacity: 0}}
    >
      {alert[0] && alert.map((alert) => {
        return <h3>{alert.msg}</h3>
      })}
    </motion.div>
  );
};

export default Alert;
