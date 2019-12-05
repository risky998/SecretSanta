import numpy as np
# n=100
# graph = np.zeros([n,n])
# keys = np.full(n,np.inf)
# bkptr = np.full(n,None)
# print(graph)

class Node():
    def __init__(self,node):
        self.node = node
        self.childs = []

class Tree():
    def __init__(self):
        self.nodes = []
    def addnode(self,node,parent):
        # print(node,parent)
        self.nodes.append(Node(node))
        for item in self.nodes:
            if item.node == parent:
                item.childs.append(node)
                break

def mst(graph):
    visited = set()
    n = len(graph)
    keys = np.full(n,np.inf)
    bkptr = np.full(n,None)
    def updateneighbors(node,visited):
        for i in range(n):
            if i in visited:
                continue
            if (graph[i][node] < keys[i]):
                keys[i] = graph[i][node]
                bkptr[i] = node
    keys[0] = 0
    mst = Tree()
    for i in range(n):
        toadd = np.argmin(keys)
        mst.addnode(toadd,bkptr[toadd])
        updateneighbors(toadd,visited)
        keys[toadd] = np.inf
        visited.add(toadd)
    return mst

def preorder(tree,v):
    visited = [v]
    for node in tree.nodes:
        if node.node == v:
            for nb in node.childs:
                visited += preorder(tree,nb)
    return visited
        
def gengraph(n):
    graph = np.zeros([n,n])
    for i in range(n):
        for j in range(i+1):
            graph[i][j] = np.random.random_sample()
            graph[j][i] = graph[i][j]
    tree = mst(graph)
    path = preorder(tree,0)
    # for node in tree.nodes:
        # print(node.node)
        # print(node.childs)
    sum_ = 0
    for i in range(len(path)-1):
        sum_ += graph[path[i]][path[i+1]]
    sum_ += graph[path[0]][path[-1]]
    print(sum_)

gengraph(10)
