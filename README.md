# K8bit — the tiny Kubernetes dashboard

K8bit is a tiny dashboard that is meant to demonstrate how to use the Kubernetes API to watch for changes.

![K8bit — the tiny Kubernetes dashboard](preview.gif)

## Usage

1. Start the web server:

```bash
node server.js
```

Start the dashboard with:

```bash
$ kubectl proxy --www=.
Starting to serve on 127.0.0.1:8001
```

Browse to `http://localhost:3000`

## Related

This project is inspired by [kube-ops-view](https://github.com/hjacobs/kube-ops-view), which is a fully featured dashboard for Kubernetes.