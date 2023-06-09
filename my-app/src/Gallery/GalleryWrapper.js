import PictureComponent from "./Components/Picture";
import ButtonComponent from "./Components/Button";

export default function GalleryWrapper() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <PictureComponent />
      <PictureComponent />
      <ButtonComponent />
    </section>
  );
}
