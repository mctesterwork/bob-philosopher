export default function DateDisplay() {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }).replace(",", "");  
    return <div>{formattedDate}</div>;
  }