import {Product, Money} from '@shopify/hydrogen/client';

import Seo from './Seo.client';
import {Banner} from './Banner';
import {DonationText} from './DonationText';
import {AddToCartControls} from './AddToCartControls.client';
import {Testimonial} from './Testimonial';
import {Illustration} from './Illustration';

export default function ProductDetails({product}) {
  const variant = firstVariant(product);

  return (
    <>
      <Seo product={product} />
      <Product
        product={product}
        initialVariantId={product.variants.edges[0].node.id}
      >
        <section className="Product Global__Section">
          <div className="Product__Mast">
            <div className="Product__Info" aria-label="Product details">
              <h1 className="Product__Title">
                <Product.Title />
              </h1>

              <div className="Product__Description">
                <div className="p">
                  <Product.Description />
                </div>
              </div>

              <div className="Product__Cart">
                <div className="Price Heading--2">
                  <Money
                    money={{
                      amount: variant.priceV2.amount,
                      currencyCode: variant.priceV2.currencyCode,
                    }}
                  />
                </div>
                <AddToCartControls {...product} />
              </div>
              <DonationText />
            </div>
            <div className="Product__FeaturedImage">
              <div
                className="Media Image Image--floating"
                style={{paddingTop: '82%'}}
              >
                <Product.SelectedVariant.Image
                  className="Media__Item"
                  options={{
                    width: '1000',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="Product__Dimensions">
            <div className="Dimensions__Image">
              <img
                src="//cdn.shopify.com/s/files/1/0457/6857/2950/t/3/assets/pawzzle-diagram-static.svg"
                alt=""
              />
            </div>
            <div className="Dimensions__Content small">
              <span claclassNamess="Dash" />
              <p>
                The Pawzzle is 7.75” (20 cm) square (a) and 2.5” (6.4 cm) in
                height (b). The holes are 1.75” (4.5 cm) in diameter (c). Plenty
                of space for paws of all sizes.
              </p>
            </div>
          </div>
        </section>
        <Banner
          align="left"
          inverted
          heading="How it’s made"
          media={
            <video className="Video" loop="" muted="" autoPlay="">
              <source
                src="https://cdn.shopify.com/s/files/1/0457/6857/2950/files/pawzzle-how-its-made-rough-4-960_-_Large_540p_-_Large_540p.mp4?v=1618599906"
                type="video/mp4"
              />
            </video>
          }
        >
          <p>
            Each Pawzzle takes about an hour to produce. First, we cut all the
            pieces using a laser cutter. We use offcuts generated by{' '}
            <a href="https://fondfolio.com">Fondfolio</a> where we create
            one-of-a-kind memory books. This material has a formaldehyde-free
            fiber board core and real wood laminate on either side. Each Pawzzle
            will have a random mix of Maple, Cherry, Walnut and Oak pieces.
          </p>
          <p>
            The rest of the production process involves preparation of the
            pieces — removing the protective mask, wiping down the sooty edges,
            assembling the feet and cutting and attaching the 100% wool foot
            pads.
          </p>

          <p>
            We also test the pieces to ensure a good friction-fit and pack each
            completed Pawzzle for shipping.
          </p>
        </Banner>
        <Testimonial
          author="Minou, Berlin"
          picture="//cdn.shopify.com/s/files/1/0457/6857/2950/files/Screen_Shot_2021-04-18_at_8.54.11_PM_700x700.png?v=1618772090"
          content="  The number and distribution of treats or toys means that no Pawzzle
            sesh is the same. This means I’m less likely to get bored and lose
            interest — purrrfect!"
        />
        <Illustration
          width={250}
          src="//cdn.shopify.com/s/files/1/0457/6857/2950/files/cat-top-pink-static_2x_c5bfad07-1763-42b5-b0ed-94c19e005d31_750x.png"
        />
      </Product>
    </>
  );
}

function firstVariant(product) {
  return product.variants.edges[0].node;
}