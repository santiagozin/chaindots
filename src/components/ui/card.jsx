/* eslint-disable react/prop-types */
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Card = styled(Paper)(({ theme }) => ({
  width: "100%",
  height: "200px",
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: "rgba(255, 255, 255, 0.5)",
}));

export default function CardComponent({children}) {
  return (
        <Card elevation={3} square={true} >{children}</Card>

  );
}