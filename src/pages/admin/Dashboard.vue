<template>
  <div class="container">	
  	<div class="row">	
		<div class="col-12 col-md-6 col-lg-4">	
			<stats-card>
			    <div class="icon-big text-center icon-warning" slot="header">
			      <i class="ti-server"></i>
			    </div>
			    <div class="numbers" slot="content">
			      <p>Capacity</p>
			      105GB
			    </div>
			    <div class="stats" slot="footer">
			      <i class="ti-reload"></i> Updated Now
			    </div>
		  </stats-card>
		</div>
		<div class="col-12 col-md-6 col-lg-4">	
			<stats-card>
			    <div class="icon-big text-center icon-warning" slot="header">
			      <i class="ti-server"></i>
			    </div>
			    <div class="numbers" slot="content">
			      <p>Capacity</p>
			      105GB
			    </div>
			    <div class="stats" slot="footer">
			      <i class="ti-reload"></i> Updated Now
			    </div>
		  </stats-card>
		</div>
		<div class="col-12 col-md-6 col-lg-4">	
			<stats-card>
			    <div class="icon-big text-center icon-warning" slot="header">
			      <i class="ti-server"></i>
			    </div>
			    <div class="numbers" slot="content">
			      <p>Capacity</p>
			      105GB
			    </div>
			    <div class="stats" slot="footer">
			      <i class="ti-reload"></i> Updated Now
			    </div>
		  </stats-card>
		</div>
  	</div>
  	<div class="row">	
			<div class="col-12 col-md-8">	
				 <chart-card title="2015 Sales"
              sub-title="All products including Taxes"
              :chart-data="activityChart.data"
              :chart-options="activityChart.options">
			    <span slot="footer">
			      <i class="ti-check"></i> Data information certified
			    </span>
			    <div slot="legend">
			      <i class="fa fa-circle text-info"></i> Tesla Model S
			      <i class="fa fa-circle text-warning"></i> BMW 5 Series
			      <i class="fa fa-circle text-warning"></i> BMW 5 Series
			    </div>
			  </chart-card>
			</div>
			<div class="col-12 col-md-4">	
				<div class="bg-primary p-3 my-2 border-radius text-white">	
						<i class="fa fa-circle text-warning"></i> Empleados
				</div>
				<div class="bg-primary p-3 my-2 border-radius text-white">	
						<i class="fa fa-circle text-warning"></i> Clientes
				</div>
				<div class="bg-primary p-3 my-2 border-radius text-white">	
						<i class="fa fa-circle text-warning"></i> Proveedores
				</div>
				<div class="bg-primary p-3 my-2 border-radius text-white">	
						<i class="fa fa-circle text-warning">Solicitudes</i> 
				</div>
			</div>
  	</div>
  </div>
</template>
<script>
import {Card, StatsCard, ChartCard} from '@/components';
export default {

components: {
  Card,
  StatsCard,
  ChartCard
},
data(){
      return {
        activityChart: {
          data: {
            labels: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
              [22, 2, 30, 80, 3, 53, 60, 64, 98, 10, 36, 75]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: "245px"
          }
        }
      }
    }
}
</script>
<style>
</style>
