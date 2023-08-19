#include <bits/stdc++.h>
using namespace std;

int dfs(int node, vector<bool> &vis, vector<int> adj[], vector<int> &a, int &c,int red){
  vis[node]=true;
  if(a[node]){
    red+=a[node];
    if(red>c){
      return 0;
    }
  }
  else{
    red=0;
  }
  
  int count_leaf=0,total_leaf=0;
  bool is_leaf=true;
  for(auto i:adj[node]){
    if(!vis[i]){
      is_leaf=false;
      count_leaf += dfs(i,vis,adj,a,c,red);
    }
  }
  
  if(is_leaf) return 1;
//   res[node] = total_leaf;
  return count_leaf;
}

int main() {

  int n,c;
  cin>>n>>c;
  vector<int> a(n+1,0);
  for(int i=1; i<=n; i++) cin>>a[i];
  vector<int> adj[n+1];
  for(int i=1; i<n; i++){
    int u,v;
    cin>>u>>v;
    adj[u].push_back(v);
    adj[v].push_back(u);
  }

  
  vector<bool> vis(n+1,false);
  vector<int> res(n+1,0);
  cout<<dfs(1,vis,adj,a,c,0);

  return 0;

}