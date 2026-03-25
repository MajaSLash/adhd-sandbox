#include <iostream>
using namespace std;

class datastore {
    public:
        int* dataArray;
        int size;

        datastore(int s) {
            size = s;
            dataArray = new int[size];
            for (int i = 0; i < size; i++) {
                dataArray[i] = 0;
            }
            cout << "datastore constructed" << endl;
        }

        ~datastore() {
            delete[] dataArray;
            cout << "datastore destructed" << endl;
        }

        int insert(int value) {
            cout << "Inserting value: " << value << endl;
            for (int i = 0; i < size; i++) {
                if (dataArray[i] == 0) {
                    dataArray[i] = value;
                    return value;
                }
            }
            return -1; // Array is full
        }
        int retrieve(int value) {
            cout << "Retrieving value: " << value << endl;
            for (int i = 0; i < size; i++) {
                if (dataArray[i] == value) {
                    return dataArray[i];
                }
            }
            return -1; // Not found
        }
        int get_random() {
            cout << "Getting random value" << endl;
            // Simulate getting a random value
            return 42; // Placeholder for random value
        }
};


