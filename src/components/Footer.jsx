

const Footer = () => {
    return ( 
        <footer style={{ background: '#333', color: '#fff', padding: '10px 20px', marginTop: '20px', textAlign: 'center' }}>
        <p>Movie Ticket Booking &copy; {new Date().getFullYear()}</p>
        </footer>
     );
}
 
export default Footer;