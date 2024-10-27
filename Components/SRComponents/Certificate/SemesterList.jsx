import { useNavigation } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const semesters =  [
    {
      "id": 1,
      "semesterNumber": "1-1",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE101",
          "courseName": "Introduction to Programming",
          "courseCredit": 3
        },
        {
          "courseId": "MTH101",
          "courseName": "Calculus I",
          "courseCredit": 4
        },
        {
          "courseId": "PHY101",
          "courseName": "Physics I",
          "courseCredit": 3
        },
        {
          "courseId": "ENG101",
          "courseName": "English Composition",
          "courseCredit": 2
        },
        {
          "courseId": "CHEM101",
          "courseName": "Chemistry I",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 2,
      "semesterNumber":"1-2",
      "credit": 18,
      "semesterCourses": [
        {
          "courseId": "CSE102",
          "courseName": "Data Structures",
          "courseCredit": 4
        },
        {
          "courseId": "MTH102",
          "courseName": "Calculus II",
          "courseCredit": 4
        },
        {
          "courseId": "PHY102",
          "courseName": "Physics II",
          "courseCredit": 4
        },
        {
          "courseId": "ENG102",
          "courseName": "Technical Writing",
          "courseCredit": 3
        },
        {
          "courseId": "SOC101",
          "courseName": "Introduction to Sociology",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 3,
      "semesterNumber": "2-1",
      "credit": 17,
      "semesterCourses": [
        {
          "courseId": "CSE201",
          "courseName": "Algorithms",
          "courseCredit": 4
        },
        {
          "courseId": "MTH201",
          "courseName": "Linear Algebra",
          "courseCredit": 3
        },
        {
          "courseId": "PHY201",
          "courseName": "Electromagnetism",
          "courseCredit": 3
        },
        {
          "courseId": "CHEM201",
          "courseName": "Organic Chemistry",
          "courseCredit": 4
        },
        {
          "courseId": "HUM101",
          "courseName": "Ethics",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 4,
      "semesterNumber": "2-2",
      "credit": 16,
      "semesterCourses": [
        {
          "courseId": "CSE202",
          "courseName": "Database Systems",
          "courseCredit": 4
        },
        {
          "courseId": "MTH202",
          "courseName": "Probability and Statistics",
          "courseCredit": 4
        },
        {
          "courseId": "ENG201",
          "courseName": "Advanced Composition",
          "courseCredit": 3
        },
        {
          "courseId": "BIO101",
          "courseName": "Biology",
          "courseCredit": 3
        },
        {
          "courseId": "ART101",
          "courseName": "Art Appreciation",
          "courseCredit": 2
        }
      ]
    },
    {
      "id": 5,
      "semesterNumber": "3-1",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE301",
          "courseName": "Operating Systems",
          "courseCredit": 4
        },
        {
          "courseId": "MTH301",
          "courseName": "Discrete Mathematics",
          "courseCredit": 4
        },
        {
          "courseId": "PHY301",
          "courseName": "Quantum Mechanics",
          "courseCredit": 3
        },
        {
          "courseId": "HIS101",
          "courseName": "World History",
          "courseCredit": 2
        },
        {
          "courseId": "ECO101",
          "courseName": "Economics",
          "courseCredit": 2
        }
      ]
    },
    {
      "id": 6,
      "semesterNumber": "3-2",
      "credit": 18,
      "semesterCourses": [
        {
          "courseId": "CSE302",
          "courseName": "Computer Networks",
          "courseCredit": 4
        },
        {
          "courseId": "MTH302",
          "courseName": "Numerical Analysis",
          "courseCredit": 4
        },
        {
          "courseId": "ENG301",
          "courseName": "Professional Communication",
          "courseCredit": 3
        },
        {
          "courseId": "PSY101",
          "courseName": "Psychology",
          "courseCredit": 3
        },
        {
          "courseId": "SOC102",
          "courseName": "Social Psychology",
          "courseCredit": 4
        }
      ]
    },
    {
      "id": 7,
      "semesterNumber": "4-1",
      "credit": 17,
      "semesterCourses": [
        {
          "courseId": "CSE401",
          "courseName": "Machine Learning",
          "courseCredit": 4
        },
        {
          "courseId": "MTH401",
          "courseName": "Optimization",
          "courseCredit": 4
        },
        {
          "courseId": "PHY401",
          "courseName": "Thermodynamics",
          "courseCredit": 3
        },
        {
          "courseId": "HUM201",
          "courseName": "Philosophy",
          "courseCredit": 3
        },
        {
          "courseId": "CHEM301",
          "courseName": "Inorganic Chemistry",
          "courseCredit": 3
        }
      ]
    },
    {
      "id": 8,
      "semesterNumber": "4-2",
      "credit": 15,
      "semesterCourses": [
        {
          "courseId": "CSE402",
          "courseName": "Software Engineering",
          "courseCredit": 4
        },
        {
          "courseId": "MTH402",
          "courseName": "Complex Analysis",
          "courseCredit": 4
        },
        {
          "courseId": "PHY402",
          "courseName": "Nuclear Physics",
          "courseCredit": 3
        },
        {
          "courseId": "HIS102",
          "courseName": "Modern History",
          "courseCredit": 2
        },
        {
          "courseId": "ECO201",
          "courseName": "Advanced Economics",
          "courseCredit": 2
        }
      ]
    }
  ]

const SemesterList = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle:'Semester'
    });
  }, []);

  // Render each semester and its courses
  const renderSemester = ({ item }) => (
    <View style={styles.semesterContainer}>
      <Text style={styles.semesterTitle}>Semester {item.semesterNumber}</Text>
      <Text style={styles.credit}>Total Credits: {item.credit}</Text>
    </View>
  );

  return (
    <FlatList
      data={semesters}
      renderItem={renderSemester}
      keyExtractor={(item) => item.id.toString()}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  semesterContainer: {
    backgroundColor: '#e0f7fa',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  semesterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'outfit-medium',
    marginBottom: 5,
  },
  credit: {
    fontSize: 16,
    fontFamily: 'outfit-medium',
    marginBottom: 10,
  },
  courseContainer: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
  },
  courseId: {
    fontSize: 14,
    fontFamily: 'outfit-medium',
    color: '#555',
  },
  courseName: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'outfit-medium',
  },
  courseCredit: {
    fontSize: 14,
    fontFamily: 'outfit-medium',
    color: '#777',
  },
});

export default SemesterList;

