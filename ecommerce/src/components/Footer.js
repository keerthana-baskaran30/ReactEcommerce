import React from "react";

import "assets/css/footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <footer>
      <div class="footer-dark">
        <h3>Ecommercy</h3>
        <p>
          Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac
          sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus.
          Aliquam in arcu eget velit pulvinar dictum vel in justo.
        </p>

        <div class="col item social">
          <FacebookIcon />
          <InstagramIcon />
        </div>

        <p class="copyright">Ecommercy © 2018</p>
      </div>
    </footer>
  );
}

export default Footer;
