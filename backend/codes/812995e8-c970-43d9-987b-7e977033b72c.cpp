#include<bits/stdc++.h>
using namespace std;

int main(){
 int n;
 cin>>n;
 vector<int> a(n);
 for(int i=0; i<n; i++){
   cin>>a[i];
 }
 int sum=0;
 for(int i=0; i<n; i++){
   sum+=a[i];
   cout<<"Sum till index "<<i+1<<": " <<sum;
 }
 cout<<'\n';
 cout<<"Sum of numbers in array: "<<sum<<'\n';
}