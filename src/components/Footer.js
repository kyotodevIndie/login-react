import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import './footer.css';

export default function Footer() {
    return (
      <footer className="footer">
        <Typography variant="body2" color="textSecondary" align="center">
          {'Designed and Coded by '}
          <Link color="inherit" href="https://github.com/kyotodevindie/">
            Kyoto
          </Link>
        </Typography>
      </footer>
    );
  }