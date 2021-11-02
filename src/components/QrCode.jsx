const QrCode = (props) => {
  return (
    <div>
      <p className="pt-3 pb-3">
        Scan the QR code below to find your seat and notify your host.
      </p>
      <img
        src={`http://api.qrserver.com/v1/create-qr-code/?data=${props.link}&size=300x300&color=5-10-55`}
        className="qrCode"
      />
    </div>
  );
};
export default QrCode;
