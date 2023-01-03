import { BodyContainer } from '../components/styles/BodyContainer.styled'
import Header from '../components/Header'
import Body from '../components/Body';
import NewBody from '../components/NewBody';
import PriceBody from '../components/PriceBody';
import Footer from '../components/Footer';

function LandingPage() {
  return (
    <>
      <Header />
      <body>
        <BodyContainer>
          <div>
            <h3>Features</h3>
          </div>
          <Body />
          <NewBody />
          <div><h3>Pricing</h3></div>
          <PriceBody />
        </BodyContainer>
      </body>
      <Footer />
    </>
  );
}

export default LandingPage;