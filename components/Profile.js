import { StyleSheet, Text, View, Image, ScrollView, Linking, TouchableOpacity } from 'react-native';
import React from 'react';

const Profile = ({ route }) => {
    const { username } = route.params || {};
    const handlePress = () => {
        Linking.openURL("https://drive.google.com/file/d/1v83ofAf_fFEwR0g_Q70cz7MhhTBOzEPa/view?usp=drivesdk");
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image
                    source={{ uri: 'data:image/png;base64,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' }}
                    style={styles.avatar}
                />

                <Text style={styles.name}>{username ? username : "Abhishrestha Tiwari"}</Text>
                <Text style={styles.bio}>
                    Passionate mobile developer. Loves coding, coffee, and creativity.
                    {'\n'}Hire Me!

                </Text>
                <View style={styles.education}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    <Text style={styles.info}>Madan Mohan Malviya University of Technology</Text>
                    <Text style={styles.details}>Bachelor of Technology in Information Technology</Text>
                </View>
                <View style={styles.technical}>
                    <Text style={styles.sectionTitle}>Technical Skills</Text>
                    <Text style={styles.details}>Programming Languages: C++, JavaScript, Python, C</Text>
                    <Text style={styles.details}>Web Technologies: HTML, CSS, React.js, Express.js, Node.js</Text>
                    <Text style={styles.details}>Mobile Development: React Native, Expo</Text>
                    <Text style={styles.details}>Databases: MongoDB, Firebase</Text>
                </View>
                <View style={styles.achievement}>
                    <Text style={styles.sectionTitle}>Achievements</Text>
                    <Text style={styles.details}>LeetCode: Solved over 350 problems (Contest rating: 1601)</Text>
                    <Text style={styles.details}>Codeforces: Pupil rank (Max rating: 1305)</Text>
                    <Text style={styles.details}>CodeChef: Competitive rating & global rank 187th in Starters 154</Text>
                </View>
                <View style={styles.resume}>
                    <TouchableOpacity onPress={handlePress}>
                        <Text style={styles.buttonText}>View Resume</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#010b14",
        padding: 20,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFD700',
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center'
    },
    details: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    technical: {
        alignItems: 'center',
        marginBottom: 12,
    },
    education: {
        alignItems: 'center',
        marginBottom: 12,
    },
    achievement: {
        alignItems: 'center',
        marginBottom: 12,
    },
    resume: {
        backgroundColor: 'aqua',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 18,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
    },
});
