---
layout: documentation
title: MNPRX License Comparison
type: Docs
excerpt: Comparison between the different versions of MNPRX
tags: [Docs, MNPRX]
comments: true
schema:
redirect_from:
  - /projects/MNPRX/docs/comparison/
---

The non-commercial (NC) and commercial versions of MNPRX (Indie, Studio) differ visually in two ways: Quality and Resolution.
{: .top2}

## Quality (Anti-aliasing)
The non-commercial version only comes with the _Standard_ quality, which doesn't involve our custom anti-aliasing solutions. Commercial versions can take advantage of _Temporal Anti-Aliasing_ for perfect results.


<!-- <div class="aio-slick">
  <div>
    <img src="/images/MNPRX/comparison/no-AA.png" />
    <p>Standard Quality, without anti-aliasing</p>
    <span>3D Model from Run Totti Run, by Shad Bradbury</span>
  </div>
  <div>
    <img src="/images/MNPRX/comparison/MSAA.png" />
    <p>Standard Quality, with Maya's Multisample Anti-Aliasing (MSAA)</p>
    <span>3D Model from Run Totti Run, by Shad Bradbury</span>
  </div>
  <div>
    <img src="/images/MNPRX/comparison/TAA.png" />
    <p>TAA Quality, featuring Temporal Anti-Aliasing in <b>MNPRX Indie and Studio licenses</b></p>
    <span>3D Model from Run Totti Run, by Shad Bradbury</span>
  </div>
</div> -->

<!--
<div class="aio-compare-splitview">
  <div class="aio-compare-panel aio-compare-bottom">
    <div class="aio-compare-content">
      <div class="aio-compare-description-r">
        <h1>TAA Quality</h1>
        <p>featuring Temporal Anti-Aliasing in <b>MNPRX Indie and Studio licenses</b></p>
      </div>
      <img src="/images/MNPRX/comparison/TAA.png">
    </div>
  </div>
  <div class="aio-compare-panel aio-compare-top">
    <div class="aio-compare-content">
      <div class="aio-compare-description-l">
        <h1>Standard Quality</h1>
        <p>without anti-aliasing</p>
      </div>
      <img src="/images/MNPRX/comparison/no-AA.png">
    </div>
  </div>
  <div class="aio-compare-handle">
  </div>
</div>  -->

<figure>
<div id="container1" style="margin: 0 auto">
 <!-- The before image is first -->
 <img src="/images/MNPRX/comparison/no-AA.png" class="pull-center"/>
 <!-- The after image is last -->
 <img src="/images/MNPRX/comparison/TAA.png" class="pull-center"/>
</div>
<figcaption class="pull-center">
<b>Standard Quality:</b> Without anti-aliasing <br>
<b>TAA Quality:</b> Featuring Temporal Anti-Aliasing in <b>MNPRX Indie and Studio licenses</b>
</figcaption>
</figure>

## Resolution
The non-commercial version can render at resolutions of up to 1920 x 1080 pixels (1080p - Full HD). The commercial version doesn't have any resolution restrictions imposed by the plugin and can render at any given resolution that the graphics' card supports.

<figure class="align-center">
	<img src="/images/MNPRX/comparison/resolutions.svg" alt="Different resolutions visualized" style="max-width: 500px">
	<figcaption>Comparison of different image resolutions.</figcaption>
</figure>

Rendering at 8K requires a lot of video memory, we are working on implementing tiled rendering to overcome this bottleneck.
{: .notice--info}

{% include toc-side %}