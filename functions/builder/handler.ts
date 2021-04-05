import { Handler, SQSEvent } from "aws-lambda";

export const builderFunction: Handler<SQSEvent> = async (event, _ctx) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is a template builder function",
        input: event.Records,
      },
      null,
      2
    ),
  };
};
