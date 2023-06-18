import errorImage from "../../img/pageNotFound2.jpg"
import { Img } from "./NotFoundPage.styled";


export default function NotFoundPage() {
  return (
    <main role="alert" >
      <Img src={errorImage} alt="Error" />
      
    </main>
  );
}