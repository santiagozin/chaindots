import { Box, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const commonStyles = {
  color: "black",
  textAlign: "center",
  fontSize: "1.2rem"
};

const StyledItem = styled(Paper)(({ theme }) => ({
  borderRadius: "10px",
  background: "linear-gradient(to right, #fff, #e6e6e6)",
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  minHeight: "170px",
}));

const InfoCard = ({ icon: Icon, title, value, extraContent }) => (
  <Grid2 size={{ xs: 12, sm: 6, md: 3 }}>
    <StyledItem sx={{ p: 5 }}>
      <Box>
        <Icon sx={{ fontSize: "2rem" }} />
        <Typography variant="body1" sx={{ ...commonStyles, fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={commonStyles}>
          {value}
        </Typography>
        {extraContent}
      </Box>
    </StyledItem>
  </Grid2>
);

export default InfoCard;