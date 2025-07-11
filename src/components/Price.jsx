export default function price({ currency, price }) {
  return (
    <>
      <h1>{currency}</h1> {/* This is a comment */}
      <span>{price}</span>
    </>
  );
}
