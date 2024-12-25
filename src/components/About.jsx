import "../styles/About.css";
import { about } from "./Data";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { academics } from "./Data";

const About = () => {
  return (
    <>
      <div className="mainbox">
        <h2>
          About<span>Me!</span>
        </h2>
        <section className="self">
          {about.data}
          <h2>
            Educa<span>tion</span>
          </h2>
        </section>

        <Card
          sx={{
            maxWidth: 280,
            margin: "20px auto",
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid white",
          }}
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <CardContent>
            <Typography variant="h6" component="div" >
              {academics[0].mca}
            </Typography>
            <Typography variant="body2" color="warning">
             {academics[0].institute}
            </Typography>
            <Typography variant="h6">{academics[0].mca_year}</Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 280,
            margin: "20px auto",
            backgroundColor: "transparent",
            color: "white",
            border: "1px solid white",
          }}
          data-aos="zoom-in"
          data-aos-duration="1200"
        >
          <CardContent>
            <Typography variant="h6" component="div">
             {academics[1].bsc}
            </Typography>
            <Typography variant="body1" color="warning">
             {academics[1].institute}
            </Typography>
            <Typography variant="h6">{academics[1].bsc_year}</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default About;
