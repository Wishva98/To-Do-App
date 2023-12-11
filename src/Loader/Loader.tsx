import './Loader.css'
export function Loader() {
    return (
        <div className="d-flex vh-100 justify-content-center align-items-center loader">
            <div className="lds-hourglass"></div>
        </div>
    );
}