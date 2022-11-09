# Kubernetes Dashboard

1- Deploy the Dashboard UI
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.1/aio/deploy/recommended.yaml
```
2- Run the Service Account
```
kubectl apply -f .\kubernetes\dashboard\admin-user.yaml 
```
3- Extract the token
```
kubectl describe secret/admin-user-token -n kubernetes-dashboard 
```
4- Run de K8 proxy
```
kubectl proxy
```
5- Go to the [Kubernetes Dashboard](http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login)




