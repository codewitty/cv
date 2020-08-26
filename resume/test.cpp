#include <iostream>

using namespace std;

int main() {

	int array[] = {1, 2, 3};
	cout << array << endl;

	char arr[] = {'A', 'B' , 'C'};
	cout << arr << endl;

	for (int i = 0; i < 3; ++i)
		cout << array[i];

	int *p = 0x7ffeee1aa9dc;

	while(p){
		cout << &p << endl;
		p++;
	}

	return 0;
}
