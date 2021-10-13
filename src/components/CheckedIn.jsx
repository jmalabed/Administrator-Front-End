import ReactDOM from "react-dom";
const node = document.getElementById("test");
console.log(node);

const CheckedIn = (props) => {
  return ReactDOM.createPortal(
    <>
      <div id="greet">
        <div class="modal" id="close">
          <h2>Thank you for checking in.</h2>

          <p>
            Employee name will greet you when they are ready. Your hotdesk
            assignment and meeting details have been sent to your email.
          </p>
        </div>
      </div>
    </>,
    node
  );
};
export default CheckedIn;
