import PictureComponent from "./Components/Picture";
import ButtonComponent from "./Components/Button";

export default function ComponentWrapper() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <PictureComponent />
      <ButtonComponent />
    </section>
  );
}
