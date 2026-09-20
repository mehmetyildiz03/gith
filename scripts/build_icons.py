from __future__ import annotations
import math, struct, zlib
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NAVY = (13, 31, 54, 255)
NAVY_2 = (17, 48, 76, 255)
TEAL = (47, 210, 202, 255)
TEAL_DARK = (30, 162, 169, 255)
WHITE = (247, 252, 255, 255)
AMBER = (244, 178, 74, 255)
MUTED = (142, 166, 188, 255)

def canvas(n, color):
    return bytearray(color * (n*n))

def px(buf,n,x,y,color):
    if 0 <= x < n and 0 <= y < n:
        i=(y*n+x)*4; buf[i:i+4]=bytes(color)

def circle(buf,n,cx,cy,r,color):
    x0=max(0,int(cx-r));x1=min(n-1,int(cx+r));y0=max(0,int(cy-r));y1=min(n-1,int(cy+r));rr=r*r
    for y in range(y0,y1+1):
        dy=(y+0.5)-cy
        for x in range(x0,x1+1):
            dx=(x+0.5)-cx
            if dx*dx+dy*dy <= rr: px(buf,n,x,y,color)

def line(buf,n,x0,y0,x1,y1,w,color):
    steps=max(1,int(max(abs(x1-x0),abs(y1-y0))*1.7))
    r=w/2
    for i in range(steps+1):
        t=i/steps
        circle(buf,n,x0+(x1-x0)*t,y0+(y1-y0)*t,r,color)

def qcurve(buf,n,p0,p1,p2,w,color):
    last=p0
    for i in range(1,101):
        t=i/100;u=1-t
        p=(u*u*p0[0]+2*u*t*p1[0]+t*t*p2[0],u*u*p0[1]+2*u*t*p1[1]+t*t*p2[1])
        line(buf,n,*last,*p,w,color);last=p

def rounded_rect(buf,n,x0,y0,x1,y1,r,color):
    for y in range(int(y0+r),int(y1-r)+1):
        for x in range(int(x0),int(x1)+1): px(buf,n,x,y,color)
    for y in range(int(y0),int(y1)+1):
        for x in range(int(x0+r),int(x1-r)+1): px(buf,n,x,y,color)
    for cx,cy in [(x0+r,y0+r),(x1-r,y0+r),(x0+r,y1-r),(x1-r,y1-r)]: circle(buf,n,cx,cy,r,color)

def arc(buf,n,cx,cy,r,a0,a1,w,color):
    steps=max(30,int(r*abs(a1-a0)))
    last=None
    for i in range(steps+1):
        a=a0+(a1-a0)*i/steps
        p=(cx+math.cos(a)*r,cy+math.sin(a)*r)
        if last: line(buf,n,*last,*p,w,color)
        last=p

def png_bytes(buf,n):
    raw=b''.join(b'\x00'+bytes(buf[y*n*4:(y+1)*n*4]) for y in range(n))
    def chunk(kind,data):
        return struct.pack('>I',len(data))+kind+data+struct.pack('>I',zlib.crc32(kind+data)&0xffffffff)
    return b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR',struct.pack('>IIBBBBB',n,n,8,6,0,0,0))+chunk(b'IDAT',zlib.compress(raw,9))+chunk(b'IEND',b'')

def build(n,path):
    s=n/512
    b=canvas(n,NAVY)
    rounded_rect(b,n,40*s,40*s,472*s,472*s,94*s,NAVY_2)
    qcurve(b,n,(138*s,354*s),(138*s,260*s),(240*s,260*s),38*s,TEAL_DARK)
    qcurve(b,n,(240*s,260*s),(366*s,260*s),(366*s,178*s),38*s,TEAL)
    circle(b,n,138*s,354*s,29*s,WHITE); circle(b,n,138*s,354*s,13*s,TEAL_DARK)
    circle(b,n,366*s,178*s,31*s,AMBER); circle(b,n,366*s,178*s,12*s,WHITE)
    arc(b,n,366*s,178*s,63*s,math.radians(205),math.radians(335),13*s,WHITE)
    arc(b,n,366*s,178*s,92*s,math.radians(210),math.radians(330),12*s,AMBER)
    rounded_rect(b,n,220*s,346*s,354*s,370*s,12*s,WHITE)
    rounded_rect(b,n,220*s,386*s,316*s,410*s,12*s,MUTED)
    path.write_bytes(png_bytes(b,n))

for size,name in [(192,'icon-192.png'),(512,'icon-512.png'),(180,'apple-touch-icon.png')]:
    build(size,ROOT/name)
    print(f'generated {name}')
