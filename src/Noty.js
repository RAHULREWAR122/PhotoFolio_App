import Noty from "noty";
// this is handle Noty package to show notifications according to condations
export default function NotyUse(notificationType) {
  let notification;
  // here using switch case for according to condition we show notification
  switch (notificationType) {
    // case 1st when we delete album or image
    case "delete":
      notification = new Noty({
        text: "Delete Successfully",
        layout: "topRight",
        theme: "success",
        type: "success",
        timeout: 1500,
      });
      break;

    // case 2nd when we Add album or image
    case "add":
      notification = new Noty({
        text: "Added Successfully",
        layout: "topRight",
        theme: "success",
        type: "success",
        timeout: 1500,
      });
      break;
    // this is default case
    default:
      break;
  }
  // check condation if notification is present then only show notification
  if (notification) {
    notification.show();
  }
  // return notification
  return notification;
}
