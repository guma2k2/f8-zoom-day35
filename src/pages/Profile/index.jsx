import { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
function Profile() {
    const [profile, setProfile] = useState({});
    const [Loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const result = await response.json();
        setProfile(result);
        setLoading(false);
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            {profile && Loading ? (
                <div className={styles.loading}>Đang tải…</div>
            ) : (
                <div className={styles.profileWrap}>
                    <div className={styles.profileName}>{profile.name}</div>
                    <div className={styles.profileUsername}>@{profile.username}</div>
                    <div className={styles.profileEmail}>{profile.email}</div>
                    <div className={styles.profilePhone}>{profile.phone}</div>
                    <div className={styles.profileWebsite}>{profile.website}</div>
                    <div className={styles.profileAddress}>
                        {profile.address?.street}, {profile.address?.city}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
