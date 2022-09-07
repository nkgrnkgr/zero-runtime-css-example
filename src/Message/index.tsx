import { Box } from "@chakra-ui/react";
import { message } from "./index.css";

export const Message = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
      className={message}
    >
      Message
    </Box>
  );
};
