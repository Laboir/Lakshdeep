/* eslint-disable react/prop-types */

export default function Footer({ addData }) {
  const numItems = addData.length;
  const numPacked = addData.filter((e) => e.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer
      className="bg-cyan-300 h-[80px] flex justify-center 
      items-center"
    >
      {!numItems ? (
        <FooterText>
          👜 Start Adding Some items to your packing list 👜{" "}
        </FooterText>
      ) : percentage === 100 ? (
        <FooterText>You got everthing! Ready to go 🧳</FooterText>
      ) : (
        <FooterText>
          You have {numItems} Items on your list and You already packed{" "}
          {numPacked} ({percentage}%) 🏃
        </FooterText>
      )}
    </footer>
  );
}

function FooterText({ children }) {
  return (
    <em className="text-xl p-1 rounded-sm max-sm:font-semibold footer-text ">
      {children}
    </em>
  );
}
