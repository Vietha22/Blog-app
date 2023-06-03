import './settings.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://t4.ftcdn.net/jpg/05/21/18/03/360_F_521180377_2iAVJqBQSo3cgKaVp8vMBR8asrC61DoU.jpg"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Viet" />
                    <label>Email</label>
                    <input type="email" placeholder="viet@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
}
