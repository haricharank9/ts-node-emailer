import { Handler, SQSEvent } from "aws-lambda";
import { createTransport } from "nodemailer";
export const senderFunction: Handler<SQSEvent> = async (event, _ctx) => {
  const transport = createTransport({});
  console.log(transport);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        transport: transport.toString(),
        message: "This is a template builder function",
        input: event.Records,
      },
      null,
      2
    ),
  };
};
